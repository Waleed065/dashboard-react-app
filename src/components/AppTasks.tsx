import { Form, FormikProvider, useFormik } from "formik";
// material
import {
  Box,
  Card,
  Checkbox,
  CardHeader,
  Typography,
  FormControlLabel,
  Stack,
} from "@material-ui/core";

// ----------------------------------------------------------------------

const TASKS = [
  "Create FireStone Logo",
  "Add SCSS and JS files if required",
  "Stakeholder Meeting",
  "Scoping & Estimations",
  "Sprint Showcase",
];

// ----------------------------------------------------------------------

interface schema {
  task: string;
  checked: boolean;
  formik: any
}
function TaskItem({ task, checked, formik, ...rest }: schema) {
  const { getFieldProps } = formik;

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ py: 0.75 }}>
      <FormControlLabel
        control={
          <Checkbox
            {...getFieldProps("checked")}
            value={task}
            checked={checked}
            {...rest}
          />
        }
        label={
          <Typography
            variant="body2"
            sx={{
              ...(checked && {
                color: "text.disabled",
                textDecoration: "line-through",
              }),
            }}
          >
            {task}
          </Typography>
        }
      />
    </Stack>
  );
}

export default function AppTasks() {
  const formik = useFormik({
    initialValues: {
      checked: [TASKS[2]],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, handleSubmit } = formik;

  return (
    <Card>
      <CardHeader title="Tasks" />
      <Box sx={{ px: 3, py: 1 }}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {TASKS.map((task) => (
              <TaskItem
                key={task}
                task={task}
                formik={formik}
                checked={values.checked.includes(task)}
              />
            ))}
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}
