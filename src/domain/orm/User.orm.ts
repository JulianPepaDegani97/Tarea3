import { userEntity } from "../entities/User.entity";
import { LogSuccess, LogError } from "@/utils/logger";

// CRUD

/**
 * Method to obtain all the users from the collection "User" in Mongo Server
 */
export const GetAllUsers = async (): Promise<any[] | undefined> => {
    try {
        let userModel = userEntity();

        // Returns all the users
        return await userModel.find({isDelete: false});
    } catch (error) {
        LogError(`[ORM ERROR]: Fetching users failed: ${error}`)
    }
}

// TODO:
// - Get User By ID
// - Get User By Email
// - Delete User By ID
// - Create User
// - Update User By ID