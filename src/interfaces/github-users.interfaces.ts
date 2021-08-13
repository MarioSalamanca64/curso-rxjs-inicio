import { GithunUser } from "./github-user.interfaces";

export interface GithubUsersResp {
    total_count:        number;
    incomplete_results: boolean;
    items:              GithunUser[];
}
