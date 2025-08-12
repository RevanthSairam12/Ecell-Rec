'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Rocket, Loader2 } from "lucide-react";
import { ECellLogo } from "@/components/ECellLogo";
import { InfoTooltip } from "@/components/ui/info-tooltip";
import { PasswordStrength } from "@/components/ui/password-strength";
import { SimpleThemeToggle } from "@/components/ui/theme-toggle";
import { DatabaseService } from "@/lib/supabase";
import { MockDataService } from "@/lib/mockData";
import { supabase } from "@/lib/supabase";

interface RegisterForm {
  fullName: string;
  email: string;
  rollNumber: string;
  branch: string;
  year: string;
  graduationYear: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = useForm<RegisterForm>();
  const { toast } = useToast();
  const router = useRouter();

  const password = watch("password");

  const handleGoogleSignup = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: { hd: 'raghuenggcollege.in' }
        }
      })
      if (error) throw error
    } catch (e) {
      console.error('Google OAuth error:', e)
      toast({ title: 'Google Sign-up Failed', description: 'Please try again.', variant: 'destructive' })
    }
  }




  const onSubmit = async (data: RegisterForm) => {
    if (data.password !== data.confirmPassword) {
      toast({
        title: "Password Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }

    if (!data.graduationYear) {
      toast({
        title: "Graduation Year Required",
        description: "Please select your graduation year",
        variant: "destructive"
      });
      return;
    }

    try {
      // Check if user already exists
      const existingUserByEmail = await MockDataService.getUserByEmail(data.email);
      if (existingUserByEmail.data) {
        toast({
          title: "Registration Failed",
          description: "An account with this email already exists.",
          variant: "destructive"
        });
        return;
      }

      const existingUserByRoll = await MockDataService.getUserByRollNumber(data.rollNumber);
      if (existingUserByRoll.data) {
        toast({
          title: "Registration Failed",
          description: "An account with this roll number already exists.",
          variant: "destructive"
        });
        return;
      }

      // Create new user
      const userResult = await MockDataService.createUser({
        email: data.email,
        full_name: data.fullName,
        roll_number: data.rollNumber,
        branch: data.branch,
        year: data.year,
        graduation_year: data.graduationYear,
        phone_number: data.phoneNumber,
        status: 'active'
      });

      if (userResult.error) {
        throw userResult.error;
      }

      // Create registration record
      await MockDataService.createRegistration({
        user_id: userResult.data!.id,
        registration_date: new Date().toISOString(),
        status: 'active',
        submission_status: 'none'
      });

      toast({
        title: "Registration Successful! 🎉",
        description: "Your account has been created successfully."
      });

      router.push("/registration/login");
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: "An error occurred during registration. Please try again.",
        variant: "destructive"
      });
    }
  };

  const branches = [
    "Computer Science Engineering (CSE)",
    "Computer Science Engineering (CSM)",
    "Computer Science Engineering (CSD)",
    "Computer Science Engineering (CSC)",
    "Electronics & Communication Engineering (ECE)",
    "Mechanical Engineering (ME)",
    "Civil Engineering (CE)",
    "Electrical Engineering (EE)"
  ];

  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

  const graduationYears = ["2025", "2026", "2027", "2028", "2029", "2030"];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
      {/* Theme Toggle - Fixed position */}
      <div className="fixed top-6 right-6 z-50">
        <SimpleThemeToggle />
      </div>

      {/* Background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-primary opacity-20 blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-accent opacity-15 blur-xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-card/50 backdrop-blur-sm mb-4">
            <ECellLogo size="sm" className="text-primary" />
            <span className="text-xs font-medium">E-Cell</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Startup Submission Portal
          </h1>
          <p className="text-sm text-muted-foreground">
            Create Your Account to Submit Your Startup Idea
          </p>
        </div>

        {/* Registration Form */}
        <div className="max-w-xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader className="pb-4">
              <CardTitle className="text-center flex items-center justify-center gap-2 text-lg">
                <Rocket className="w-4 h-4 text-primary" />
                Register Your Account
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 min-h-[20px]">
                      <Label htmlFor="fullName">Full Name</Label>
                    </div>
                    <Input
                      id="fullName"
                      {...register("fullName", { required: "Full name is required" })}
                      autoFocus
                      className="bg-background/50"
                    />
                    {errors.fullName && (
                      <p className="text-destructive text-sm">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 min-h-[20px]">
                      <Label htmlFor="email">College Email ID</Label>
                      <InfoTooltip content="Must be your official college email ending with @raghuenggcollege.in" />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "College email is required",
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@raghuenggcollege\.in$/,
                          message: "Please use your college email ID (@raghuenggcollege.in)"
                        }
                      })}
                      className="bg-background/50"
                      placeholder="yourname@raghuenggcollege.in"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Roll Number */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 min-h-[20px]">
                      <Label htmlFor="rollNumber">Roll Number</Label>
                    </div>
                    <Input
                      id="rollNumber"
                      {...register("rollNumber", {
                        required: "Roll number is required",
                        pattern: {
                          value: /^[0-9A-Za-z]{8,15}$/,
                          message: "Please enter a valid roll number (8-15 characters, letters and numbers only)"
                        }
                      })}
                      className="bg-background/50"
                      placeholder="23981A42U4"
                      style={{ textTransform: 'uppercase' }}
                    />
                    {errors.rollNumber && (
                      <p className="text-destructive text-sm">{errors.rollNumber.message}</p>
                    )}
                  </div>

                  {/* Branch */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 min-h-[20px]">
                      <Label htmlFor="branch">Branch</Label>
                    </div>
                    <Select onValueChange={(value) => setValue("branch", value)}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select Your Branch" />
                      </SelectTrigger>
                      <SelectContent>
                        {branches.map((branch) => (
                          <SelectItem key={branch} value={branch}>
                            {branch}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.branch && (
                      <p className="text-destructive text-sm">Branch is required</p>
                    )}
                  </div>

                  {/* Year */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 min-h-[20px]">
                      <Label htmlFor="year">Current Year</Label>
                      <InfoTooltip content="Select your current academic year" />
                    </div>
                    <Select onValueChange={(value) => setValue("year", value)}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select Your Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.year && (
                      <p className="text-destructive text-sm">Year is required</p>
                    )}
                  </div>

                  {/* Graduation Year */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 min-h-[20px]">
                      <Label htmlFor="graduationYear">Graduation Year</Label>
                    </div>
                    <Select onValueChange={(value) => setValue("graduationYear", value)}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select Graduation Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {graduationYears.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.graduationYear && (
                      <p className="text-destructive text-sm">Graduation year is required</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 min-h-[20px]">
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                    </div>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      {...register("phoneNumber", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Please enter a valid 10-digit phone number"
                        }
                      })}
                      className="bg-background/50"
                    />
                    {errors.phoneNumber && (
                      <p className="text-destructive text-sm">{errors.phoneNumber.message}</p>
                    )}
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="password">Password</Label>
                    <InfoTooltip content="Use a strong password with at least 8 characters, including uppercase, lowercase, numbers, and special characters" />
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters"
                        }
                      })}
                      className="bg-background/50 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                  <PasswordStrength password={password || ""} />
                  {errors.password && (
                    <p className="text-destructive text-sm">{errors.password.message}</p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      {...register("confirmPassword", { required: "Please confirm your password" })}
                      className="bg-background/50 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-destructive text-sm">{errors.confirmPassword.message}</p>
                  )}
                </div>

                {/* Privacy Note */}
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    We will never share your data with anyone outside E-Cell REC.
                  </p>

	                {/* Or divider */}
	                <div className="relative my-3">
	                  <div className="absolute inset-0 flex items-center">
	                    <span className="w-full border-t" />
	                  </div>
	                  <div className="relative flex justify-center text-xs">
	                    <span className="bg-card px-2 text-muted-foreground">or</span>
	                  </div>
	                </div>

	                {/* Google Sign-up */}
	                <Button type="button" variant="outline" className="w-full" onClick={handleGoogleSignup}>
	                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
	                    <path fill="#EA4335" d="M12 10.2v3.6h5.1c-.2 1.2-1.5 3.6-5.1 3.6-3 0-5.4-2.5-5.4-5.4S9 6.6 12 6.6c1.7 0 2.9.7 3.6 1.3l2.5-2.5C16.8 3.9 14.6 3 12 3 6.9 3 2.7 7.2 2.7 12.3S6.9 21.6 12 21.6c6.3 0 9-4.4 9-8.1 0-.5 0-.8-.1-1.3H12z"/>
	                  </svg>
	                  Sign up with Google (REC Email)
	                </Button>

                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                  size="default"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Register"
                  )}
                </Button>

                {/* Login Link */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Already registered?{" "}
                    <Link href="/registration/login" className="text-primary hover:underline">
                      Login here
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
