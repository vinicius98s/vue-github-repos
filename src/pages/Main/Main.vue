<template>
  <Container>
    <h1>
      <v-icon name="brands/github" :scale="2"></v-icon>Repositórios
    </h1>
    <Form @submit="handleSumbit">
      <input v-model="newRepo" type="text" placeholder="Adicionar repositório" />
      <SubmitButton type="submit" :loading="loading" :disabled="loading">
        <v-icon :name="loading ? 'circle-notch' : 'plus'" :spin="loading"></v-icon>
      </SubmitButton>
    </Form>
    <StyledUl>
      <li v-for="repository in repositories" :key="repository.name">
        <span>{{ repository.name }}</span>
        <router-link :to="`/repository/${encodeURIComponent(repository.name)}`">Detalhes</router-link>
      </li>
    </StyledUl>
  </Container>
</template>

<script>
// @ is an alias to /src
import api from '@/services/api';
import Container from '@/components/Container';

import { Form, SubmitButton, StyledUl } from './styles';

export default {
  name: 'home',
  data() {
    return {
      newRepo: '',
      repositories: [],
      loading: false,
    };
  },
  components: {
    Container,
    Form,
    SubmitButton,
    StyledUl,
  },
  methods: {
    async handleSumbit(event) {
      event.preventDefault();

      this.loading = true;

      const response = await api.get(`/repos/${this.newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.repositories = [...this.repositories, data];
      this.newRepo = '';
      this.loading = false;
    },
  },
  mounted() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.repositories = JSON.parse(repositories);
    }
  },
  watch: {
    repositories(newRepositories, oldRepositories) {
      if (newRepositories !== oldRepositories) {
        localStorage.setItem('repositories', JSON.stringify(newRepositories));
      }
    },
  },
};
</script>
