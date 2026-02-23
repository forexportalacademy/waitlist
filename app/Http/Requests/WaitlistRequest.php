<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WaitlistRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'max:120'],
            'last_name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email:rfc,dns', 'max:255'],
            'phone' => ['required', 'string', 'max:40'],
            'gender' => ['required', 'string', 'max:40'],
        ];
    }

    public function messages(): array
    {
        return [
            'first_name.required' => 'Please provide your first name.',
            'last_name.required' => 'Please provide your last name.',
            'email.required' => 'Please provide an email address.',
            'email.email' => 'Please provide a valid email address.',
            'phone.required' => 'Please provide a phone number.',
            'gender.required' => 'Please choose a gender.',
        ];
    }
}
