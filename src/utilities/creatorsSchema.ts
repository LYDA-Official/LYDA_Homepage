import * as Yup from 'yup';

const creatorsSchema = Yup.object().shape({
    twitter: Yup.string().url(),
    facebook: Yup.string().url(),
    twitch: Yup.string().url(),
    youTube: Yup.string().url(),
    website: Yup.string().url(),
    other: Yup.string().url(),
    discord: Yup.string().url(),
    support: Yup.string().required('Required'),
    willing: Yup.string().required('Required'),
    example: Yup.string(),
    email: Yup.string().email('Invalid Email').required('Required'),
})


export default creatorsSchema;