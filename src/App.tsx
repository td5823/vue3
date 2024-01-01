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
          <span>{node.name}</span>
          {node.children &&
            node.children.length > 0 &&
            expandedMenu.value[node.id] && (
              <div class="children">{renderTree(node.children)}</div>
            )}
        </div>
      ))
    }

    const handleClickIcon = (id: string) => {
      // 创建一个新的响应式对象来保存更新后的展开状态
      const updatedMenu: any = { ...expandedMenu.value }
      updatedMenu[id] = !updatedMenu[id]
      // 更新 ref，触发重新渲染
      expandedMenu.value = updatedMenu
    }

    const tree = computed(() => renderTree(treeData))

    return () => (
      <div>
        <h1>Hello from JSX!</h1>
        <p>This is a JSX-enabled Vue component.</p>
        <div class="tree">{tree.value}</div>
      </div>
    )
  },
})
