export default defineNuxtRouteMiddleware(async (to, from) => {
  const serviceStore = useServiceStore();

  const token = localStorage['JWT_TOKEN'];
  const isTokenInvalid = !token || !isValidToken(token);

  if (isTokenInvalid && to.name !== '004' && to.name !== '006') {
    serviceStore.toast.error('Sign in to your account');
    return navigateTo({ name: '004' });
  } else {
    if (to.name !== '004') {
      try {
        await serviceStore.api.getPosts();
      } catch (err) {
        serviceStore.toast.error('Problem with token, try to login again');
        return navigateTo({ name: '004' });
      }
    }
  }

  setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, 1);
});
