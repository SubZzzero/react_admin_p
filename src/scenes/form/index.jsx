import { Box, Button, TextField } from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"
import Header from "../../components/Header"

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


const useSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    contact: yup
        .string()
        .matches(phoneRegExp, "phone is not valid")
        .required("Required"),
    address1: yup.string().required("Required"),
    address2: yup.string().notRequired(),
});

const Form = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const handleFormSubmit = (values) => {
        console.log(values)
    }

    return (
        <Box >
            <Header title={"Form"} subtitle={"User form"}></Header>

            <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                validationSchema={useSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

                    <form onSubmit={handleSubmit}>

                        <Box display={"grid"} gap={"30px"} gridTemplateColumns={"repeat(4, minmax(0, 1fr))"} margin={"20px"} sx={{
                            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                        }}>

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2" }}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2" }}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 4" }}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Contact number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Addres1"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address1}
                                name="address1"
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Addres2"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address2}
                                name="address2"
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && errors.address2}
                                sx={{ gridColumn: "span 4" }}
                            />
                        </Box>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"right"} margin={"20px"}>
                            <Button type="submit" color="secondary" variant="contained">Create new user</Button>
                        </Box>
                    </form>
                )}
            </Formik>

        </Box>
    )
}

export default Form;