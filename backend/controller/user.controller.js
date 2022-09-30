import User from '../model/User.js'

//update
export const updateUser = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updateUser)
  } catch (err) {
    next(err)
  }
}

//delete
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json('User has been deleted')
  } catch (err) {
    next(err)
  }
}

//get by ID
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

//get All
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
}

//get User by type
export const getUserByType = async (req, res, next) => {
  try {
    const user = await User.find({ type: req.params.type })
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

// export const countByUser = async (req, res, next) => {
//   const firtName = req.query.name.split(',')
//   try {
//     const list = await Promise.all(
//       cities.map((city) => {
//         return Hotel.countDocuments({ city: city })
//       })
//     )
//     res.status(200).json(list)
//   } catch (err) {
//     next(err)
//   }
// }
