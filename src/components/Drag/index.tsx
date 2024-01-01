// DragDrop.vue

import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    // 初始位置
    const positionX = ref(0)
    const positionY = ref(0)

    // 鼠标按下时记录初始位置和是否正在拖拽
    let isDragging = false
    let startX = 0
    let startY = 0

    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true
      startX = event.clientX - positionX.value
      startY = event.clientY - positionY.value

      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging) {
        positionX.value = event.clientX - startX
        positionY.value = event.clientY - startY
      }
    }

    const handleMouseUp = () => {
      isDragging = false
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    return {
      positionX,
      positionY,
      handleMouseDown,
    }
  },

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          left: `${this.positionX}px`,
          top: `${this.positionY}px`,
          border: '1px solid #000',
          padding: '8px',
          cursor: 'grab',
        }}
        onMouseDown={this.handleMouseDown}
      >
        Drag me!
      </div>
    )
  },
})
