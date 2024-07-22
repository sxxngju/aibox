<script setup>
definePageMeta({
    layout: 'default'
});

const { openModal, closeModal } = useModalStore();
</script>

<template>
    <div class="detail">
        <h1>상세 페이지</h1>
        <br />
        <v-btn
            size="large"
            class="primary"
            @click="
                openModal({
                    type: 'main',
                    message: '메인 페이지로 이동하시겠습니까?',
                    buttonLabels: ['아니요', '예']
                })
            "
            >메인 페이지 이동</v-btn
        >
        <Modal
            @handle-action="
                useRouter().push('/');
                closeModal();
            "
        />

    </div>
</template>

<style type="scss">
.detail{
    max-width: 1000px;
    border:1px solid var(--primary);
    margin:0 auto;
}
</style>