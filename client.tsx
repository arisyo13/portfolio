import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: "peqa4imu",
  dataset: "production",
  apiVersion: '2021-05-14',
  useCdn: true
});