# EventTypes

Webhooks registration must either apply to a set application events (e.g app.installed, app.uninstalled) or to customer events


## Supported Types

### `operations.One[]`

```typescript
const value: operations.One[] = [
  "app.installed",
];
```

### `operations.Two[]`

```typescript
const value: operations.Two[] = [
  "customer.details.changed",
];
```

