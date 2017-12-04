export const SHOW_TIP = 'SHOW_TIP'
export const HIDDEN_TIP = 'HIDDEN_TIP'

/**
 * 显示提示框（模态）
 * @param content
 */
export const showTip = (content) => ({
    type: SHOW_TIP,
    visible : true,
    content
})

/**
 * 隐藏提示框（模态）
 */
export const hiddenTip = () => ({
    type: HIDDEN_TIP,
    visible : false
})

