
import { posts_candidates, userLoginIn, adminLogin, adminAuth, user, rollNo, adminCode, post, showLogin } from "./store";

export function logout() {
    showLogin.update(v=>true);
    userLoginIn.update(v => false);
    adminLogin.update(v => false);
    adminAuth.update(v => false);
    user.update(v => "");
    rollNo.update(v => "");
    post.update(v => "");
    adminCode.update(v => "");
}

export function getCandidates(post_) {
    let cand = posts_candidates.find(o => o.id === post_.id)
    return cand.candidates;
}