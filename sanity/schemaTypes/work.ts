import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Commercial', value: 'Commercial' },
          { title: 'Music Video', value: 'Music Video' },
          { title: 'Documentary', value: 'Documentary' },
          { title: 'Social Media', value: 'Social Media' },
          { title: 'Corporate', value: 'Corporate' },
          { title: 'Narrative', value: 'Narrative' },
        ],
      },
    }),
    defineField({
      name: 'orientation',
      title: 'Orientation',
      type: 'string',
      options: {
        list: [
          { title: 'Landscape (16:9)', value: 'landscape' },
          { title: 'Portrait (9:16)', value: 'portrait' },
        ],
        layout: 'radio',
      },
      initialValue: 'landscape',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (External)',
      type: 'url',
      description: 'Direct link to the video file (mp4) or stream (YouTube/Vimeo).',
      hidden: ({ document }: any) => !!document?.videoFile,
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File (Raw)',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      description: 'Upload a raw video file (MP4/WebM).',
      hidden: ({ document }: any) => !!document?.videoUrl,
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'thumbnail',
    },
  },
})
