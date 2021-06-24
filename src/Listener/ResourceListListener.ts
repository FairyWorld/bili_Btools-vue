/**
 * 监听器：收藏夹
 */

import BaseListener from '@/listener/baseListener'
import { RequestApiType } from '@/scripts/base/enums/ContentJsType'

export default class ResourceListListener extends BaseListener {
  init() {
    this.urls = ['*://api.bilibili.com/x/v3/fav/resource/list*']
    super.init()
  }

  handle() {
    this.sendToContentJs(
      {
        type: RequestApiType.ResourceList,
        tabId: this.tabId
      },
      (response) => {}
    )
  }
}
