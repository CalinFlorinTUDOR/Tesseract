const Permission = require('../modules/permissionSchema');

const getAllPermissions = async (req, res) => {
  try{
    const permissions= await Permission.find();
    res.status(201).json({ success: 'Permission created', data: permissions});
  } catch (err) {
    return res.status(404).json({ error: 'No permission found!'});
  }
};

const addPermission = async (req, res) => {
  try {
    const permissionData = req.body;

    // Create a new Permission object using the permission data
    const newPermission = new Permission(permissionData);

    const savedPermission = await newPermission.save();

    res.status(201).json({ success: 'Permission created', data: savedPermission });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to add the permission' });
  }
};

module.exports = {
  getAllPermissions ,
  addPermission,
};