import { type AxiosInstance } from 'axios';
import * as types from './types';

export class ServiceApi {
  private request: AxiosInstance;

  constructor(request: AxiosInstance) {
    this.request = request;
  }

  async loginUser(email: string, password: string) {
    const { data } = await this.request.post<types.LoginResponse>('/api/auth/login', {
      email,
      password,
    });
    return data;
  }

  async registerUser(username: string, confirm_password: string, email: string, password: string, firstname: string, lastname: string) {
    const data = await this.request.post('/api/auth/register', {
      username,
      password,
      email,
      confirm_password,
      firstname,
      lastname,
    });
    console.log(data);
    return data;
  }

  async getUserData(id: string) {
    const data = await this.request.get(`/api/users/${id}`);
    console.log(data);
    return data;
  }

  async getUserFollowers(id: string) {
    const data = await this.request.get(`/api/users/${id}/followers`);
    console.log(data);
    return data;
  }

  async getUserFollowing(id: string) {
    const data = await this.request.get(`/api/users/${id}/following`);
    console.log(data);
    return data;
  }

  async getUserPosts(id: string) {
    const data = await this.request.get(`/api/posts/by-user/${id}`);
    console.log(data);
    return data;
  }

  async getPosts() {
    const data = await this.request.get(`/api/posts`);
    return data;
  }

  async createPost(formData: FormData) {
    const data = await this.request.post(`/api/posts`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  }

  async sendMessage(content: string) {
    const data = await this.request.post(`/api/messages`, { content });
    return data;
  }
  async getMessages() {
    const data = await this.request.get(`/api/messages`);
    return data;
  }

  async follow(userId: string, followerId: string) {
    const data = await this.request.post(`/api/users/follow?userId=${userId}&followerId=${followerId}`);
    return data;
  }

  async unfollow(userId: string, followerId: string) {
    const data = await this.request.post(`/api/users/unfollow?userId=${userId}&followerId=${followerId}`);
    return data;
  }

  async updateAvatar(file: any) {
    const data = await this.request.post(`/api/users/upload-avatar`, file, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  }
}
