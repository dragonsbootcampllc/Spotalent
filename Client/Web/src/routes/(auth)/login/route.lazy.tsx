import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLogin } from "@/hooks";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(auth)/login")({
    component: RouteComponent,
});

function RouteComponent() {
    const loginMutation = useLogin();

    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                    const errors: { email?: string; password?: string } = {};
                    if (!values.email) {
                        errors.email = "Required";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                        )
                    ) {
                        errors.email = "Invalid email address";
                    }
                    if (!values.password) {
                        errors.password = "Required";
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    loginMutation.mutate(values, {
                        onSuccess: () => {
                            setSubmitting(false);
                            // Redirect or perform other actions on success
                        },
                        onError: () => {
                            setSubmitting(false);
                            // Handle error
                        },
                    });
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
