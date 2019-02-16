export const registerGuards = router => router.beforeEach((to , from, next) => {
  const authRequired = to.matched.some(record => record.meta.requiresAuth)

  if (authRequired && !store.getters.isLoggedIn) {
    return next('/login');
  }

  return next()
});
