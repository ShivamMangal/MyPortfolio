import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '3bvj9xkj',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
  token: 'skCsvUuNEXngH6zJKvMmCGoqnQvi6g1FuhJixPSUzUoctOt3eapbZM6ARbdNgJkFZqyW1hqTp5P81D9fsPvkS3t7pjI6RqDiY3Js3NBIdDQumAMlVs5dgAoUZJnzMdp8vsXzdA10eSA0tH9Yiebel77Eh2BI5GYQoeEbRZZDaISXuxDrwEoN',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);