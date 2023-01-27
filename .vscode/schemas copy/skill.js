export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Title of skill",
    },
    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      validation: (rule) => rule.min(0).max(100).
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
          hotspot: true,
      }
     
    }
  ], 

 
}
