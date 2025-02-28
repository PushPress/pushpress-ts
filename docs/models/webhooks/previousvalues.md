# PreviousValues


## Supported Types

### `components.OpenCheckin`

```typescript
const value: components.OpenCheckin = {
  id: "chk_12345",
  customer: "usr_12345",
  company: "cli_12345",
  timestamp: 1672531200000,
};
```

### `components.EventCheckin`

```typescript
const value: components.EventCheckin = {
  id: "chk_12345",
  customer: "usr_12345",
  company: "cli_12345",
  timestamp: 1672531200000,
  name: "My Event",
  role: "staff",
  typeId: "cit_12345",
  eventId: "cal_item_12345",
  type: {
    id: "cit_12345",
    name: "Weightlifting Seminar",
  },
};
```

### `components.ClassCheckin`

```typescript
const value: components.ClassCheckin = {
  id: "chk_12345",
  customer: "usr_12345",
  company: "cli_12345",
  timestamp: 1672531200000,
  name: "My Class",
  typeId: "cit_12345",
  classId: "cal_item_12345",
  type: {
    id: "cit_12345",
    name: "Group HIIT Training",
  },
  role: "attendee",
};
```

### `components.AppointmentCheckin`

```typescript
const value: components.AppointmentCheckin = {
  id: "apptschdl_12345",
  customer: "usr_12345",
  company: "cli_12345",
  timestamp: 1672531200000,
  name: "Personal Training",
  appointmentId: "apptschdl_12345",
  typeId: "appttype_12345",
};
```

