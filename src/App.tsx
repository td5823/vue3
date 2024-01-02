import { defineComponent, ref, computed } from 'vue'
import { treeData } from './mock'
import './tree.less'

export default defineComponent({
  setup() {
    // 创建一个 ref 来保存菜单展开状态
    const expandedMenu: any = ref({})

    const renderTree = (nodes: any) => {
      return nodes.map((node: any) => (
        <div key={node.name}>
          {node.children && (
            <i class="icon" onClick={() => handleClickIcon(node.id)} />
          )}
          <span
            onDragstart={(event) => handleDragStart(event, node.id)}
            onDragover={(event) => handleDragOver(event)}
            onDrop={(event) => handleDrop(event, node.id)}
          >
            {node.name}
          </span>
          {node.children &&
            node.children.length > 0 &&
            expandedMenu.value[node.id] && (
              <div class="children">{renderTree(node.children)}</div>
            )}
        </div>
      ))
    }

    const handleDragStart = (event: any, id: any) => {
      event.dataTransfer.setData('text/plain', id)
    }

    const handleDragOver = (event: any) => {
      event.preventDefault()
    }

    const handleDrop = (event: any, id: any) => {
      event.preventDefault()
      const draggedNodeId = event.dataTransfer.getData('text')
      // 在这里处理拖拽结束后的逻辑，可以更新树节点位置等
      // 可以根据 draggedNodeId 和 id 进行节点位置的更新
      console.log(`Node ${draggedNodeId} dropped on Node ${id}`)
      // 更新节点位置逻辑
    }

    const handleClickIcon = (id: string) => {
      // 创建一个新的响应式对象来保存更新后的展开状态
      const updatedMenu: any = { ...expandedMenu.value }
      updatedMenu[id] = !updatedMenu[id]
      // 更新 ref，触发重新渲染
      expandedMenu.value = updatedMenu
    }

    const tree = computed(() => renderTree(treeData))

    return () => <div class="tree">{tree.value}</div>
  },
})
