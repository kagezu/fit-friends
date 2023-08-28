import { StoreType } from '../types/store';
import { Role } from '../const';
import { User } from '../types/user';
import { ErrorList } from '../utils/parse-error';
import { Notify } from '../types/notify';
import { Training } from '../types/training';
import { Review } from '../types/review';
import { Balance } from '../types/balance';
import { PersonalOrder } from '../types/personal-order';
import { Friend } from '../types/friend';

export const getRole = (state: StoreType): Role => state.User.role;
export const getUser = (state: StoreType): User => state.User;
export const getUsers = (state: StoreType): User[] => state.Users;
export const getFriends = (state: StoreType): Friend[] => state.Friends;
export const getUserInfo = (state: StoreType): User => state.UserInfo;
export const getError = (state: StoreType): ErrorList => state.Error;
export const getNotify = (state: StoreType): Notify[] => state.Notify;
export const getTrainingSpecial = (state: StoreType): Training[] => state.TrainingSpecial;
export const getTrainingPopular = (state: StoreType): Training[] => state.Trainings;
export const getTrainingOffers = (state: StoreType): Training[] => state.TrainingOffers;
export const getTrainingFiltred = (state: StoreType): Training[] => state.TrainingFiltred;
export const getTraining = (state: StoreType): Training => state.Training;
export const getReviews = (state: StoreType): Review[] => state.Reviews;
export const getBalance = (state: StoreType): Balance => state.Balance;
export const getPersonalOrder = (state: StoreType): PersonalOrder => state.PersonalOrder;
export const getPersonalOrders = (state: StoreType): PersonalOrder[] => state.PersonalOrders;