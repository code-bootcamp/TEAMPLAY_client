export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type IBoard = {
  __typename?: 'Board';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  project: IProject;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export enum ICareer_Enum {
  Jobseeker = 'JOBSEEKER',
  Newcomer = 'NEWCOMER',
  Student = 'STUDENT'
}

export type IChat = {
  __typename?: 'Chat';
  chatRoom: IChatRoom;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  user: IUser;
};

export type IChatRoom = {
  __typename?: 'ChatRoom';
  chat: Array<IChat>;
  chatRoomMembers: Array<IChatRoomMember>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name: Scalars['String'];
  project: IProject;
};

export type IChatRoomMember = {
  __typename?: 'ChatRoomMember';
  chatRoom: IChatRoom;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  user: IUser;
};

export type ICreateProjectInput = {
  description: Scalars['String'];
  imgUrl: Scalars['String'];
  intro: Scalars['String'];
  locationId: Scalars['String'];
  method: IMethod_Enum;
  name: Scalars['String'];
  numbers: Array<Scalars['Int']>;
  platformIds: Array<Scalars['String']>;
  positionIds: Array<Scalars['String']>;
  recruitDate: Scalars['DateTime'];
  skill: Scalars['String'];
  teamname: Scalars['String'];
  typeId: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type ILocation = {
  __typename?: 'Location';
  id: Scalars['String'];
  name: Scalars['String'];
  region: IRegion;
};

export enum IMethod_Enum {
  Mediate = 'MEDIATE',
  Meet = 'MEET',
  Untact = 'UNTACT'
}

export type IMutation = {
  __typename?: 'Mutation';
  cancelPointPayment: IPointPayment;
  checkTokenToEmail: Scalars['Boolean'];
  completeTask: ITask;
  createBoard: IBoard;
  createLocation: ILocation;
  createPlatform: IPlatform;
  createPointPayment: IPointPayment;
  createPosition: IPosition;
  createProject: IProject;
  createQna: IQna;
  createRegion: IRegion;
  createReview: IReview;
  createTask: ITask;
  createTendency: ITendency;
  createType: IType;
  createUser: IUser;
  deleteAllProject: Scalars['Boolean'];
  deleteBoard: Scalars['Boolean'];
  deleteProject: Scalars['Boolean'];
  deleteQna: Scalars['Boolean'];
  deleteReview: Scalars['Boolean'];
  deleteTask: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deleteUserHard: Scalars['Boolean'];
  endProject: Scalars['Boolean'];
  joinChatRoom: IChatRoomMember;
  login: IToken;
  logout: Scalars['String'];
  notCompleteTask: ITask;
  restoreAccessToken: IToken;
  sendMessage: Scalars['String'];
  sendTokenToEmail: Scalars['String'];
  startProject: IProject;
  updateBoard: IBoard;
  updateQna: IQna;
  updateReview: IReview;
  updateTask: ITask;
  updateUser: IUser;
  updateUserByOnboard: IUser;
  uploadFile: Array<Scalars['String']>;
};


export type IMutationCancelPointPaymentArgs = {
  impUid: Scalars['String'];
};


export type IMutationCheckTokenToEmailArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationCompleteTaskArgs = {
  taskId: Scalars['String'];
};


export type IMutationCreateBoardArgs = {
  content: Scalars['String'];
  projectId: Scalars['String'];
  title: Scalars['String'];
};


export type IMutationCreateLocationArgs = {
  name: Scalars['String'];
};


export type IMutationCreatePlatformArgs = {
  name: Scalars['String'];
};


export type IMutationCreatePointPaymentArgs = {
  amount: Scalars['Float'];
  impUid: Scalars['String'];
};


export type IMutationCreatePositionArgs = {
  name: Scalars['String'];
};


export type IMutationCreateProjectArgs = {
  createProjectInput: ICreateProjectInput;
};


export type IMutationCreateQnaArgs = {
  content: Scalars['String'];
  projectId: Scalars['String'];
  qnaType: IQna_Type_Enum;
  title: Scalars['String'];
};


export type IMutationCreateRegionArgs = {
  name: Scalars['String'];
};


export type IMutationCreateReviewArgs = {
  content: Scalars['String'];
  projectId: Scalars['String'];
  title: Scalars['String'];
};


export type IMutationCreateTaskArgs = {
  content: Scalars['String'];
  limit: Scalars['DateTime'];
  projectId: Scalars['String'];
  taskType: ITask_Type_Enum;
  userIds: Array<Scalars['String']>;
};


export type IMutationCreateTendencyArgs = {
  name: Scalars['String'];
};


export type IMutationCreateTypeArgs = {
  name: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteProjectArgs = {
  projectId: Scalars['String'];
};


export type IMutationDeleteQnaArgs = {
  qnaId: Scalars['String'];
};


export type IMutationDeleteReviewArgs = {
  reviewId: Scalars['String'];
};


export type IMutationDeleteTaskArgs = {
  taskId: Scalars['String'];
};


export type IMutationDeleteUserHardArgs = {
  email: Scalars['String'];
};


export type IMutationEndProjectArgs = {
  projectId: Scalars['String'];
};


export type IMutationJoinChatRoomArgs = {
  projectId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationNotCompleteTaskArgs = {
  taskId: Scalars['String'];
};


export type IMutationSendMessageArgs = {
  chatRoomId: Scalars['String'];
  message: Scalars['String'];
};


export type IMutationSendTokenToEmailArgs = {
  email: Scalars['String'];
};


export type IMutationStartProjectArgs = {
  chatRoomId: Scalars['String'];
  point: Scalars['Float'];
  userIds: Array<Scalars['String']>;
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  content: Scalars['String'];
  title: Scalars['String'];
};


export type IMutationUpdateQnaArgs = {
  content: Scalars['String'];
  qnaId: Scalars['String'];
  title: Scalars['String'];
};


export type IMutationUpdateReviewArgs = {
  content: Scalars['String'];
  reviewId: Scalars['String'];
  title: Scalars['String'];
};


export type IMutationUpdateTaskArgs = {
  content: Scalars['String'];
  limit: Scalars['DateTime'];
  taskId: Scalars['String'];
  taskType: ITask_Type_Enum;
  userIds: Array<Scalars['String']>;
};


export type IMutationUpdateUserArgs = {
  changePassword: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationUpdateUserByOnboardArgs = {
  updateUserOnboardInput: IUpdateUserOnboardInput;
};


export type IMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
};

export enum IPoint_Payment_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IPlatform = {
  __typename?: 'Platform';
  id: Scalars['String'];
  name: Scalars['String'];
  projects: Array<IProject>;
};

export type IPointPayment = {
  __typename?: 'PointPayment';
  amount: Scalars['Int'];
  id: Scalars['String'];
  impUid?: Maybe<Scalars['String']>;
  status: IPoint_Payment_Status_Enum;
};

export type IPosition = {
  __typename?: 'Position';
  id: Scalars['String'];
  name: Scalars['String'];
  projectToPositions: Array<IProjectToPosition>;
};

export type IProject = {
  __typename?: 'Project';
  boards?: Maybe<Array<IBoard>>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  imgUrl: Scalars['String'];
  intro: Scalars['String'];
  isComplete: Scalars['Boolean'];
  isStart: Scalars['Boolean'];
  leader: IUser;
  location: ILocation;
  method: IMethod_Enum;
  name: Scalars['String'];
  platforms: Array<IPlatform>;
  point: Scalars['Int'];
  projectMembers?: Maybe<Array<IProjectMember>>;
  projectToPositions: Array<IProjectToPosition>;
  qnas?: Maybe<Array<IQna>>;
  recruitDate: Scalars['DateTime'];
  reviews?: Maybe<Array<IReview>>;
  skill: Scalars['String'];
  tasks?: Maybe<Array<ITask>>;
  teamname: Scalars['String'];
  type: IType;
  updatedAt: Scalars['DateTime'];
};

export type IProjectMember = {
  __typename?: 'ProjectMember';
  id: Scalars['String'];
  project: IProject;
  user: IUser;
};

export type IProjectToPosition = {
  __typename?: 'ProjectToPosition';
  id: Scalars['String'];
  number: Scalars['Int'];
  position: IPosition;
  project: IProject;
};

export enum IQna_Type_Enum {
  Answer = 'ANSWER',
  Question = 'QUESTION'
}

export type IQna = {
  __typename?: 'Qna';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  project: IProject;
  qnaType: IQna_Type_Enum;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchBoard: IBoard;
  fetchBoards: Array<IBoard>;
  fetchChatRoomMembers: Array<IChatRoomMember>;
  fetchChatRooms: Array<IChatRoom>;
  fetchChats: Array<IChat>;
  fetchLocations: Array<ILocation>;
  fetchPlatforms: Array<IPlatform>;
  fetchPositions: Array<IPosition>;
  fetchProject: IProject;
  fetchProjectCounts: Scalars['Int'];
  fetchProjects: Array<IProject>;
  fetchQna: IQna;
  fetchQnas: Array<IQna>;
  fetchRegions: Array<IRegion>;
  fetchReview: IReview;
  fetchReviews: Array<IReview>;
  fetchTask: ITask;
  fetchTasks: Array<ITask>;
  fetchTendencys: Array<ITendency>;
  fetchTypes: Array<IType>;
  fetchUser: IUser;
  fetchUsers: Array<IUser>;
  progressRatio: Scalars['Int'];
  searchProjects: Array<IProject>;
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchBoardsArgs = {
  projectId: Scalars['String'];
};


export type IQueryFetchChatRoomMembersArgs = {
  chatRoomId: Scalars['String'];
};


export type IQueryFetchChatsArgs = {
  chatRoomId: Scalars['String'];
};


export type IQueryFetchProjectArgs = {
  projectId: Scalars['String'];
};


export type IQueryFetchProjectsArgs = {
  page: Scalars['Float'];
};


export type IQueryFetchQnaArgs = {
  qnaId: Scalars['String'];
};


export type IQueryFetchQnasArgs = {
  projectId: Scalars['String'];
};


export type IQueryFetchReviewArgs = {
  reviewId: Scalars['String'];
};


export type IQueryFetchReviewsArgs = {
  projectId: Scalars['String'];
};


export type IQueryFetchTaskArgs = {
  taskId: Scalars['String'];
};


export type IQueryFetchTasksArgs = {
  projectId: Scalars['String'];
};


export type IQueryFetchUsersArgs = {
  page: Scalars['Float'];
};


export type IQueryProgressRatioArgs = {
  projectId: Scalars['String'];
};


export type IQuerySearchProjectsArgs = {
  search: Scalars['String'];
};

export type IRegion = {
  __typename?: 'Region';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type IReview = {
  __typename?: 'Review';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  project: IProject;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export enum ITask_Type_Enum {
  Design = 'DESIGN',
  Development = 'DEVELOPMENT',
  Planning = 'PLANNING'
}

export type ITask = {
  __typename?: 'Task';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  is_complete: Scalars['Boolean'];
  limit: Scalars['DateTime'];
  project: IProject;
  taskType: ITask_Type_Enum;
  updatedAt: Scalars['DateTime'];
  user: IUser;
  users: Array<IUser>;
};

export type ITendency = {
  __typename?: 'Tendency';
  id: Scalars['String'];
  name: Scalars['String'];
  users: Array<IUser>;
};

export type IToken = {
  __typename?: 'Token';
  accessToken: Scalars['String'];
  onboarding?: Maybe<Scalars['Boolean']>;
};

export type IType = {
  __typename?: 'Type';
  id: Scalars['String'];
  name: Scalars['String'];
  users: Array<IUser>;
};

export type IUpdateUserOnboardInput = {
  career?: InputMaybe<ICareer_Enum>;
  imgUrl?: InputMaybe<Scalars['String']>;
  positionId: Scalars['String'];
  tendencyId: Array<Scalars['String']>;
  typeId: Array<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  boards?: Maybe<Array<IBoard>>;
  career?: Maybe<ICareer_Enum>;
  chatRoomMembers: Array<IChatRoomMember>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['String'];
  imgUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  point: Scalars['Int'];
  position?: Maybe<IPosition>;
  projectMembers?: Maybe<Array<IProjectMember>>;
  tasks?: Maybe<Array<ITask>>;
  tendencys?: Maybe<Array<ITendency>>;
  types?: Maybe<Array<IType>>;
};
