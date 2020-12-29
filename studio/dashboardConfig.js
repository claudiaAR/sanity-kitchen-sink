export default {
  widgets: [
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
                  buildHookId: '5feb213a9463202ec2728cb1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-nifzjbk6',
                  apiId: 'be91ecc0-dbd4-4ade-abff-889811a0515a'
                },
                {
                  buildHookId: '5feb213ae25dc607733787dc',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mota8s5t',
                  apiId: '95a7e3d3-adf3-4165-9e38-cf1908d4be0e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/claudiaAR/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mota8s5t.netlify.app', category: 'apps'}
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
