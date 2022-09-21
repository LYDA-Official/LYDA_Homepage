import * as Yup from 'yup';


const schema = Yup.object().shape({
    twitter:Yup.string().url(),
    discord: Yup.string().url(),
    support: Yup.string().required('Required'),
    benefit:  Yup.string().required('Required'),
    earning:  Yup.string().required('Required'),
    creator:  Yup.string(),
    example: Yup.string(),
    email: Yup.string().email('Invalid Email').required('Required'),
})


export default schema;