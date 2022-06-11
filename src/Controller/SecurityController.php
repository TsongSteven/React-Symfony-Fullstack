<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasher;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Security;

class SecurityController extends AbstractController
{
    private $security;

    public function __construct(Security $security){
        $this->security = $security;
    }
    /**
     * @Route("/api/login", name="login", methods={"POST"})
     */
    public function login(JWTTokenManagerInterface $jwt, UserRepository $userRepo, UserPasswordHasherInterface $encoder, Request $request): Response
    {
        $parameter = json_decode($request->getContent(), true);
        $user = $userRepo->findOneBy(['email' =>$parameter['email']]);
        if(!$user || !$encoder->isPasswordValid($user, $parameter['password'])){
            return $this->json([
                'logInError'=> true
            ]);
        }
        return $this->json([
            'message' => 'Logged In',
            'token' => $jwt->create($user)
        ]);
    }
    /**
     * @Route("/register-new-user", name="register-new-user", methods={"POST"})
     */
    public function register(UserPasswordHasherInterface $encoder, Request $request): Response
    {
        $parameter = json_decode($request->getContent(), true);
      
        $email = $parameter['email'];
        $password = $parameter['password'];

        $user = new User();
        $user->setEmail($email);
        $user->setPassword($encoder->hashPassword($user, $password));
        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();
        return $this->json([
            'message' => 'Registered User Successfully!!'
        ]);
    }
    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
