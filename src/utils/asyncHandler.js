// Ik raper function banaya hai jesy hum her jaga use kry ga – esy ik function dia kry gy – ye osey execute kr k dia kry ga
// Higher order functions
// ik function ko further ik function me pass kia hai
// Promise approach
const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
export { asyncHandler };
// try and catch approach
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
