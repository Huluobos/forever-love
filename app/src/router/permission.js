import router from './index'
router.beforeEach(async (to, from, next) => {
    const user =  localStorage.getItem("user")
    if(user && user!==''){
        if (to.path === '/login') {
            next('/') 
        }else{
            next()
        }
    }else{
        if (to.path === '/login') {
            next() 
        }else{
            next('/login')
        }
    }
})