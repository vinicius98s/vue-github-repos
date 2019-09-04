<template>
  <div>
    <Loading v-if="loading">Carregando...</Loading>
    <Container v-else>
      <Owner>
        <router-link to="/">Voltar aos repositórios</router-link>
        <img :src="repository.owner.avatar_url" :alt="repository.owner.login" />
        <h1>{{ repository.name }}</h1>
        <p>{{ repository.description }}</p>
      </Owner>
      <Issues>
        <li v-for="issue in issues" :key="String(issue.id)">
          <img :src="issue.user.avatar_url" :alt="issue.user.login" />
          <div>
            <strong>
              <a :href="issue.html_url" target="_blank">{{ issue.title }}</a>
              <div>
                <span v-for="label in issue.labels" :key="String(label.id)">{{ label.name }}</span>
              </div>
            </strong>
            <p>{{ issue.user.login }}</p>
          </div>
        </li>
      </Issues>
    </Container>
  </div>
</template>

<script>
import api from '@/services/api';
import Container from '@/components/Container';

import { Loading, Owner, Issues } from './styles';

export default {
  components: {
    Loading,
    Container,
    Owner,
    Issues,
  },
  data() {
    return {
      repository: {},
      issues: [],
      loading: true,
    };
  },
  async created() {
    const repoName = this.$route.params.repository;

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.repository = repository.data;
    this.issues = issues.data;
    this.loading = false;
  },
};
</script>
