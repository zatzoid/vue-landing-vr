<template>
    <section class="team">
        <div class="team__heading-container">
            <coloredText>Our team</coloredText>
            <div class="team__heading">

                <h2 class="section-heading">Our Professionals Team</h2>
                <clearBtn> see all</clearBtn>
            </div>
            
        </div>
        <ul class="team__grid">
            <TeamItem class="team__grid-el" v-for="(item, index) in itemList" :key="index" :item="item">
            </TeamItem>
        </ul>

    </section>
</template>

<script>
import TeamItem from './TeamItem.vue';

export default {
    name: 'OurTeam',
    data() {
        return {
            itemList: [
                {
                    img: require('@/assets/man/man1.png'),
                    name: 'Bondan Prabowo',
                    job: 'CEO'
                },
                {
                    img: require('@/assets/man/man2.png'),
                    name: 'Bayu Aji',
                    job: 'VR Development'
                },
                {
                    img: require('@/assets/man/man3.png'),
                    name: 'Agung Brandon',
                    job: 'VR Artist'
                },
                {
                    img: require('@/assets/man/man4.png'),
                    name: 'Aril Laso',
                    job: 'UI / UX Designer'
                }
            ]
        };
    },
    components: { TeamItem }
}
</script>

<style scoped lang="scss">
.team {
    &__heading {
        display: flex;
        justify-content: space-between;
       
        &-container{
            margin: 150px 0 40px;
        }
    }

    &__grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: auto;
        gap: 10px;
        justify-content: center;

        
    }
}
</style>