const deleteCategory = (category, user) =>
fetch('/deletecategory', {
    method: 'delete',
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify({ category, user, email: user.email })
});

export default deleteCategory;