
# scripts/build_data_js.py
import pandas as pd, json, pathlib

# Read Excel (first sheet)
df = pd.read_excel('dataset.xlsx', engine='openpyxl')

# Normalize columns; create missing ones to be safe
df.columns = [str(c).strip() for c in df.columns]
expected = ['City','State','Company Name','Category','Status','Year of Certification','PoC','GP Team']
for col in expected:
    if col not in df.columns:
        df[col] = ''

# Clean strings and drop empty rows
for col in expected:
    df[col] = df[col].astype(str).str.strip().replace({'nan':'', 'None':''})
df = df[~((df['City'] == '') & (df['Company Name'] == ''))].copy()

records = []
for _, r in df.iterrows():
    records.append({
        'city':   r['City'],
        'state':  r['State'],
        'company':r['Company Name'],
        'category':r['Category'],
        'status': r['Status'],
        'year':   r['Year of Certification'],
        'poc':    r['PoC'],
        'gp_team':r['GP Team'],
    })

pathlib.Path('docs').mkdir(exist_ok=True)
with open('docs/data.js', 'w', encoding='utf-8') as f:
    f.write('window.GREEN_MAP_DATA = ' + json.dumps(records, ensure_ascii=False, indent=2) + ';\n')
print('✅ wrote docs/data.js (', len(records), 'records)')
