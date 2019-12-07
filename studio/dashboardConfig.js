export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5deb7915e6dcbab4eb47bf06',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-iq8u22du',
                  apiId: '76a7d2d5-d976-42fd-bfe7-d11ea8d5546c'
                },
                {
                  buildHookId: '5deb79158b09a1c45d0d4000',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1r5y8qfj',
                  apiId: 'f0760d8a-6775-4d53-b662-6d16f72deeda'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/OmarAbdo/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1r5y8qfj.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
