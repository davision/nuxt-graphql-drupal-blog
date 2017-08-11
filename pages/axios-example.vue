<template>
  <div class="container">
  
    <section class="section">
      <Posts v-if="nodeQuery" :posts="nodeQuery.entities" />
      <Loading v-else />
    </section>
  
  </div>
</template>

<script>
import axios from 'axios'
import Posts from '~/components/Posts'
import Loading from '~/components/Loading'

const query = `{
  nodeQuery(limit:10, offset:0, filter:{type:"article"}) {
    entities{
      entityLabel
      entityUuid
      entityUrl {
        path
      }
      ...on NodeArticle {
        body
        fieldImage {
          derivative(style:thumbnail) {
            url
          }
        }
        fieldTags {
          entityLabel
        }
      }
    }
    count
  }
}
`

export default {
  components: { Posts, Loading },
  async asyncData () {
    const result = await axios.post('http://dev-graphql-demo-blog.pantheonsite.io/graphql', JSON.stringify({
      query: query
    }))
    return {
      nodeQuery: result.data.data.nodeQuery
    }
  }
}
</script>
