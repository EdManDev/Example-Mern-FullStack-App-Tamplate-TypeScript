// ======================================================================================
// @desc      Response User
// @route     GET /api/user
// @access    Public
// ======================================================================================
const getUser = (req: any, res: any) => {
	res.json({ message: "Hello World! from get User" });
};

// ======================================================================================
// @desc      Post User
// @route     POST /api/user
// @access    Public
// ======================================================================================
const postUser = (req: any, res: any) => {
	res.json({ message: "Hello World! Post  User" });
};

// ======================================================================================
// @desc      update User
// @route     PUT /api/user
// @access    Public
// ======================================================================================
const putUser = (req: any, res: any) => {
	const userId = req.params.id;
	res.json({ message: "Hello World!  Update User", userId });
};

// ======================================================================================
// @desc      Remove User
// @route     DELETE /api/user
// @access    Public
// ======================================================================================
const deleteUser = (req: any, res: any) => {
	const userId = req.params.id;
	res.json({ message: "Hello World!  Delete User", userId});
};

export { getUser, postUser, putUser, deleteUser };
