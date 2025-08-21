<script setup lang="ts">
const { $bootstrap } = useNuxtApp();



const openModal = () => {
  const myModal = document.getElementById('myModal')

  const bootstrapModal = new $bootstrap.Modal(myModal!)
  bootstrapModal.show()
}

onMounted(() => {
  // โค้ดที่ต้องการรันเมื่อ component mount
  console.log('Component mounted')
})
</script>

<template>
  <div>
    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="myModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <div class="m-5">
      <div class="btn btn-success" @click="openModal">Open Modal</div>
      <div class="btn btn-danger">Danger</div>
      <div class="btn btn-warning">Warning</div>
    </div>
  </div>
</template>
