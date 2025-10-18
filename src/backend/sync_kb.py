import boto3
import time
import json

# Initialize Bedrock Agent client
bedrock_agent = boto3.client('bedrock-agent', region_name='us-west-2')

KB_ID = 'E3U4UABSC7'

print("Fetching knowledge base data sources...")

# Get the data source ID
try:
    data_sources = bedrock_agent.list_data_sources(knowledgeBaseId=KB_ID)

    if not data_sources.get('dataSourceSummaries'):
        print("ERROR: No data sources found for this knowledge base")
        exit(1)

    ds = data_sources['dataSourceSummaries'][0]
    data_source_id = ds['dataSourceId']
    data_source_name = ds['name']

    print(f"Found data source: {data_source_name} (ID: {data_source_id})")
    print(f"Current status: {ds['status']}")

    # Start ingestion job
    print("\nStarting ingestion job...")

    response = bedrock_agent.start_ingestion_job(
        knowledgeBaseId=KB_ID,
        dataSourceId=data_source_id,
        description='Syncing updated clinical trials CSV with fixed metadata'
    )

    ingestion_job_id = response['ingestionJob']['ingestionJobId']
    print(f"Ingestion job started: {ingestion_job_id}")
    print(f"Status: {response['ingestionJob']['status']}")

    # Monitor the job
    print("\nMonitoring ingestion progress...")
    print("(This may take a few minutes)\n")

    while True:
        time.sleep(10)  # Wait 10 seconds between checks

        job_status = bedrock_agent.get_ingestion_job(
            knowledgeBaseId=KB_ID,
            dataSourceId=data_source_id,
            ingestionJobId=ingestion_job_id
        )

        status = job_status['ingestionJob']['status']
        print(f"Status: {status}")

        if 'statistics' in job_status['ingestionJob']:
            stats = job_status['ingestionJob']['statistics']
            print(f"Statistics: {json.dumps(stats, indent=2)}")

        if status == 'COMPLETE':
            print("\n" + "="*80)
            print("SUCCESS! Knowledge base sync completed")
            print("="*80)
            if 'statistics' in job_status['ingestionJob']:
                print(f"\nFinal statistics:")
                print(json.dumps(job_status['ingestionJob']['statistics'], indent=2))
            break

        elif status == 'FAILED':
            print("\n" + "="*80)
            print("ERROR! Ingestion job failed")
            print("="*80)
            if 'failureReasons' in job_status['ingestionJob']:
                print(f"Failure reasons: {job_status['ingestionJob']['failureReasons']}")
            break

        elif status in ['STARTING', 'IN_PROGRESS']:
            # Continue monitoring
            continue
        else:
            print(f"Unexpected status: {status}")
            break

except Exception as e:
    print(f"Error: {e}")
    import traceback
    traceback.print_exc()
