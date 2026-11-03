# Secure Youth Opportunities API

A small Node.js portfolio project demonstrating OWASP API3:2023 Broken Object Property Level Authorization with fictional youth opportunity data.

## Run locally

```powershell
node server.js
```

Open `http://127.0.0.1:3000` in a browser.

## Run the security tests

```powershell
node --test
```

## Security finding

The vulnerable version returned complete internal records from `/api/opportunities`. The dashboard displayed only public properties, but the raw response still included `internalContact` and `reviewNotes`.

## Fix

`toPublicOpportunity()` creates a new response object from an explicit allowlist. `getPublicOpportunities()` applies that serializer before data reaches the route. The regression tests protect both the approved response shape and the exclusion of internal fields.

## Safe use

All records are fictional. This project is a local educational demonstration and contains no real participant data, credentials, or API keys.

NOTE!! 
I published this project on NextWork.ai, go check it out!
https://nextwork.ai/projects/1dd851b7-594e-4f70-b169-c093322d3c28

