# IncludeHistoricalCheckins

whether to include checkins that happened outside of pushpress, currently defaults to true for backwards compatibility, but may default to false in the future

## Example Usage

```typescript
import { IncludeHistoricalCheckins } from "@pushpress/pushpress/models/operations";

let value: IncludeHistoricalCheckins = "true";
```

## Values

```typescript
"true" | "false"
```