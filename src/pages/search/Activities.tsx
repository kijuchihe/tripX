import React from 'react'
import Layout from '../../components/layout'
import Container from '../../components/layout/Container'
import SearchForm from '../../components/features/SearchForm'

const Activities: React.FC = () => {
  return (
    <Layout>
      <Container isFirst>
        <SearchForm />
      </Container>
    </Layout>
  )
}

export default Activities
