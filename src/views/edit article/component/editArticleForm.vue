<template>
    <div class="my-4">
        <form class="row" @submit.prevent="completeForm">
            <div class="col-sm-9">
                <div class="mb-3 has-validation">
                    <label for="exampleFormControlInput1" class="form-label">Title</label>
                    <input v-model="title" type="text" placeholder="Title" class="form-control"
                        id="exampleFormControlInput1 required">
                    <div class="invalid-feedback">
                        Please choose a username.
                    </div>
                </div>
                
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Description</label>
                    <input v-model="description" type="text" class="form-control" placeholder="Description"
                        id="exampleFormControlInput1">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Body</label>
                    <textarea v-model="body" class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
            </div>

            <div class="col-sm-3  ps-sm-4">
                <label for="tags" class="form-label">Tags</label>
                <input type="text" v-model="tagTitle" @keypress.prevent.enter="addTag()" name="tags" class="form-control"
                    placeholder="New tag">
                <div class="form-control tagsTEextaria mt-3 overflow-auto">
                    <articleTags v-for="(item, index ) in tags" :key="index" class="mb-2" :tag="item"></articleTags>
                </div>
            </div>

            <div class="col-12 pt-2">
                <button class="btn btn-sm blue px-4" :disabled="isLoading" type="submit">
                    <span v-if="isLoading" class="spinner-border spinner-border-sm me-2" role="status"
                        aria-hidden="true"></span>
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import articleTags from '@/components/articleTags.vue'
import axios from 'axios'
import router from '@/router'
import { useToast } from "vue-toastification";
import { headers, headersWithoutBearer } from '@/axiosHeader';


export default {
    name: 'app',
    components: { articleTags },
    setup() {
        const toast = useToast();
        return { toast }
    },
    data() {
        return {
            tagTitle: '',
            tags: [],
            title: '',
            description: '',
            body: '',
            isCheckedTags: '',
            slug: this.$route.params.slug,
            isLoading: true,
        }
    },
    methods: {
        addTag() {
            const tag = { title: this.tagTitle, ischecked: false }
            this.tags.push(tag)
            this.tagTitle = ""
        },
        completeForm() {
            this.isLoading = true
            const writtenArticle = {
                article: {
                    title: this.title,
                    description: this.description,
                    body: this.body,
                    tagList: []
                }
            }
            const checkedTags = this.tags.filter(tag => tag.isChecked)
            writtenArticle.article.tagList = checkedTags.map(tag => tag.title);
            const editedArticle = JSON.stringify(writtenArticle);

            axios.put(`https://api.realworld.io/api/articles/${this.slug}`, editedArticle, {
                headers
            })
                .then(response => {
                    router.push('/allPost');
                    this.toast.success("Well done! Article updated successfuly");
                    this.isLoading = false;
                })
                .catch(error => {
                    console.log(error);
                    this.isLoading = false;
                });
        }
    },
    mounted() {
        axios.get('https://api.realworld.io/api/articles')
            .then(response => {
                this.posts = response.data;
                const articles = response.data.articles
                articles.forEach(element => {
                    element.tagList.forEach(tagsElement => {
                        const tag = { title: tagsElement, isChecked: false };
                        this.tags.push(tag);
                        this.tags.sort((a, b) => a.title.localeCompare(b.title));
                    })
                });
            })

            .catch(error => {
                console.log(error);
            });

        axios.get(`https://api.realworld.io/api/articles/${this.slug}`, { headers: headersWithoutBearer })
          .then(({ data: { article } }) => {
            const { title, description, body, tagList } = article;
            this.title = title;
            this.description = description;
            this.body = body;
            this.tags.forEach(tag => {
              tag.isChecked = tagList.includes(tag.title);
            });
          })
          .catch(console.error)
          .finally(() => this.isLoading = false);
        
    }
}

</script>
