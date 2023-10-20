<template>
    <div class="flex flex-col">
        <div class="flex flex-col">
            <div class="w-full h-72 right-0 left-0 grid grid-cols-1 items-center justify-between">
                <img
                    src="/template-license-poster.png"
                    alt="Timeline picture"
                    class="absolute w-full h-72 object-cover left-0"
                />
                <div class="flex items-center">
                    <img
                        src="/template-license-poster.png"
                        alt="Profile picture"
                        class="h-24 w-24 rounded-full relative left-0 top-32"
                    />
                </div>
            </div>

            <div class="mt-14">
                <div class="ml-2.5">
                    <div class="flex items-center text-2xl font-bold">{{ user.name }}</div>
                    <div class="flex items-center jusitfy-between">
                        <span>{{ accounts[0] }}</span>

                        <span>Joined</span>
                        <span>{{ user.joinDatePure ? joinDate : user.joinDatePure }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import useUserStore from '@Store/user'
export default {
    name: 'ProfilePage',

    data() {
        return {
            user: {
                name: 'Unnamed',
                joinDatePure: '2018-04-11T12:00:00.000Z',
            },
        }
    },
    computed: {
        ...mapState(useUserStore, ['accounts']),

        joinDate() {
            const date = new Date(this.user.joinDatePure)
            const month = date.toLocaleString('default', { month: 'long' })
            const dateString = `${date.getFullYear()} ${month}`

            return dateString
        },
    },
}
</script>

<style></style>
