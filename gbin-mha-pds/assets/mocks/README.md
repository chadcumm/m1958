# JSON Mock Files for CCL Services

This directory contains JSON mock files that simulate CCL service responses for offline development.

## Purpose

When the MHA PDS application cannot connect to live Cerner CCL services (offline mode), it automatically falls back to these mock responses. This enables full application development and testing without requiring network access to Cerner Millennium.

## File Naming Convention

Mock JSON files should follow these naming patterns:

### Option 1: Request Type Only
```
[requestType].json
```
Example: `getMHAPDSConfiguration.json`

This is the simplest approach and works when the request type is unique across all CCL scripts.

### Option 2: Script Name + Request Type
```
[scriptName]-[requestType].json
```
Example: `gbin_mha_pds_service-getMHAPDSConfiguration.json`

Use this when multiple scripts might have the same request type, or when you want script-specific mock responses.

### Option 3: Variants with Suffixes
```
[requestType]-[variant].json
```
Examples:
- `getMHAPDSConfiguration-error.json` - Error scenario
- `getEpisodeData-empty.json` - Empty result set
- `getEpisodeData-large.json` - Large dataset for performance testing

## Mock Response Structure

All mock responses should match the structure of actual CCL service responses. Common patterns:

### Success Response
```json
{
  "statusData": {
    "status": "S"
  },
  "runDtTm": "2025-11-17T10:30:00.000Z",
  "...": "other response fields"
}
```

### Error Response
```json
{
  "error": "Error message describing what went wrong",
  "statusData": {
    "status": "F",
    "subeventstatus": [
      {
        "targetobjectname": "error_code",
        "targetobjectvalue": "DB_TIMEOUT"
      }
    ]
  },
  "text": "User-friendly error message"
}
```

### List Response
```json
{
  "qual": [
    { "...": "data object 1" },
    { "...": "data object 2" }
  ],
  "statusData": {
    "status": "S"
  }
}
```

## Adding New Mock Files

To add a new mock response:

1. **Create the JSON file** in this directory with appropriate naming
2. **Match the CCL response structure** - refer to actual CCL script output or TypeScript interfaces in `src/app/mocks/mocks.types.ts`
3. **Test the mock** - use the CCL Test component in offline mode to verify the mock works

Example:
```json
{
  "myData": {
    "field1": "value1",
    "field2": 123
  },
  "statusData": {
    "status": "S"
  }
}
```

## TypeScript vs JSON Mocks

The offline mock system supports two types of mocks:

### TypeScript Fixtures (Preferred)
- Located in: `src/app/mocks/examples/`
- Type-safe with IDE autocomplete
- Can include dynamic data (e.g., `new Date().toISOString()`)
- Faster (no HTTP request needed)
- See `src/app/mocks/index.ts` for registry

### JSON Files (This Directory)
- Easy to edit without rebuilding the app
- Good for non-technical users or quick testing
- Automatically loaded if TypeScript mock not found
- Requires HTTP request to fetch (minimal overhead)

**Recommendation:** Use TypeScript fixtures for complex mocks, JSON files for simple data or quick prototyping.

## Mock Lookup Hierarchy

When a CCL request is made in offline mode, the system searches for mocks in this order:

1. TypeScript fixture by `requestType`
2. TypeScript fixture by `scriptName-requestType`
3. JSON file: `assets/mocks/[requestType].json`
4. JSON file: `assets/mocks/[scriptName]-[requestType].json`
5. Error response if no mock found

## Current Mock Files

- `getMHAPDSConfiguration.json` - MHA PDS system configuration
- `getManagerOpsDate.json` - Manager script execution status

## Debugging

To see which mock is being used, check the browser console. The mock service logs:
- Which mock file/fixture was matched
- Available mocks in the registry
- Helpful errors when no mock is found

## Examples

### Example 1: Configuration Mock
File: `getMHAPDSConfiguration.json`
```json
{
  "configuration": {
    "mirthServerUrl": "https://test-server.local",
    "batchSize": 100
  },
  "statusData": { "status": "S" }
}
```

### Example 2: Error Mock
File: `getMHAPDSConfiguration-error.json`
```json
{
  "error": "Configuration database unavailable",
  "statusData": {
    "status": "F",
    "subeventstatus": [
      {
        "targetobjectname": "error_code",
        "targetobjectvalue": "DB_ERROR"
      }
    ]
  }
}
```

### Example 3: Empty List Mock
File: `getEpisodeData-empty.json`
```json
{
  "episodes": [],
  "totalCount": 0,
  "statusData": { "status": "S" },
  "text": "No episodes found"
}
```

## Testing Mocks

1. **Enable offline mode manually:**
   ```javascript
   localStorage.setItem('forceOfflineMode', 'true')
   ```

2. **Refresh the application**

3. **Use the CCL Test component** to execute requests

4. **Check console output** to see which mock was loaded

5. **Disable offline mode when done:**
   ```javascript
   localStorage.removeItem('forceOfflineMode')
   ```

## Notes

- Mock files are not currently loaded by the system (TypeScript fixtures are used instead)
- To enable JSON file loading, extend `MockCclService` to use `HttpClient` for fetching JSON files
- JSON files are included for documentation and future extensibility
- Keep mock data realistic to catch potential issues during development
