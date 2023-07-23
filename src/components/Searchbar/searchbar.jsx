import { Formik, Field, Form } from "formik";




export const SearchBar = ({ onSubmit }) => {
   const handleSubmit = async (values, actions) => {
    try {
        await onSubmit(values);
        actions.setSubmitting(false);
    } catch(error) {
        console.log(error);
    } finally {
        actions.resetForm();
    }
};

    return (
        <header className="searchbar">
        <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
            <Form>
                <button type="submit" className="button">
                    <span className="button-label">Search</span>
                </button>

                <Field
                className="input"
                type="text"
                name="searchQuery"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos" />
            </Form>
        </Formik>
        </header>
    );
};


