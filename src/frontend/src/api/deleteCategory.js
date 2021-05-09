const deleteCategory = (categoryId, user) =>
fetch('/deletecategory', {
    method: 'delete',
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify({ categoryId, user, email: user.email })
});

export default deleteCategory;