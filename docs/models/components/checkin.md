# Checkin

Checkin for a class, event, appointment or an open facility


## Supported Types

### `components.ClassCheckin`

```typescript
const value: components.ClassCheckin = {
  id: "chk_12345",
  customer: "usr_12345",
  company: "cli_12345",
  name: "My Class",
  typeId: "cit_12345",
  type: {
    id: "cit_12345",
    name: "Group HIIT Training",
  },
  timestamp: 1672531200000,
  role: "attendee",
};
```

### `components.AppointmentCheckin`

```typescript
const value: components.AppointmentCheckin = {
  id: "apptschdl_12345",
  name: "Personal Training",
  customer: "usr_12345",
  company: "cli_12345",
  timestamp: 1672531200000,
  typeId: "appttype_12345",
};
```

### `components.EventCheckin`

```typescript
const value: components.EventCheckin = {
  id: "chk_12345",
  name: "My Event",
  customer: "usr_12345",
  company: "cli_12345",
  timestamp: 1672531200000,
  role: "staff",
  typeId: "cit_12345",
  type: {
    id: "cit_12345",
    name: "Weightlifting Seminar",
  },
};
```

### `components.OpenCheckin`

```typescript
const value: components.OpenCheckin = {
  id: "chk_12345",
  customer: "usr_12345",
  company: "cli_12345",
  timestamp: 1672531200000,
};
```

