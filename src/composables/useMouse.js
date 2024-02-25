import { onMounted, onUnmounted, ref } from 'vue'
export function useMouse() {
  const x = ref(0)
  const y = ref(0)
  const isActive = ref(false)

  const updateCursor = (e) => {
    x.value = e.clientX
    y.value = e.clientY
  }
  onMounted(() => {
    window.addEventListener('mousemove', updateCursor)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', updateCursor)
  })

  return { x, y }
}
